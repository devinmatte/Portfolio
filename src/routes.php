<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->get('/', function (Request $request, Response $response, $args) {
    // Copyright value set to current year
    $args['copyright'] = date("Y");

    $database = new Database(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
    $conn = $database->getMysqliConn();

    $sql = "SELECT * from `projects` ORDER BY `commits` DESC;";
    $args['projects'] = $conn->query($sql);

    // Returns the template with all data from $args
    $this->renderer->render($response, 'home.twig', $args);
});
