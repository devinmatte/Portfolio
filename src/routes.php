<?php

use Slim\Http\Request;
use Slim\Http\Response;
use GuzzleHttp\Client;

const DEVINMATTE = 'devinmatte';

$app->get('/', function (Request $request, Response $response, $args) {
    // Copyright value set to current year
    $args['copyright'] = date("Y");

    $database = new Database(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    $conn = $database->getMysqliConn();

    $sql = "SELECT * from `projects` ORDER BY `priority`;";
    $projects = $conn->query($sql);

    $client = new Client([
        // Base URI is used with relative requests
        'base_uri' => 'https://api.github.com',
        // You can set any number of default request options.
        'timeout'  => 2.0,
    ]);

    $projects = $projects->fetch_all(MYSQLI_BOTH);

    foreach ($projects as &$project){
        $githubResponse = $client->get(
            "/repos/" . $project['org'] . "/" . $project['repo'] . "/stats/contributors",
            [
                'query' => [
                    'client_id' => CLIENT_ID,
                    'client_secret' => CLIENT_SECRET
                ]
            ]
        );
        $reponseBody = json_decode($githubResponse->getBody());
        foreach ($reponseBody as $reponseSection){
            if ($reponseSection->author->login === DEVINMATTE) {
                $project['commits'] = $reponseSection->total;
            }
        }
    }

    $args['projects'] = $projects;

    // Returns the template with all data from $args
    $this->renderer->render($response, 'home.twig', $args);
});
