<?php

$autoLoader = require_once 'vendor/autoload.php';

// Load settings
$settings = require __DIR__ . '/src/settings.php';

// Instantiate the app
$app = new \Slim\App($settings);

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];

    $twigRenderer = new Slim\Views\Twig($settings['template_path']);

    $twigEnv = $twigRenderer->getEnvironment();

    $twigEnv->addFilter(new Twig_SimpleFilter("jsonDecode", function ($string) {
        return json_decode($string, true);
    }));

    return $twigRenderer;
};

if (file_exists('../config.php')) {
    include '../config.php';
}

require_once 'src/Database.php';

// Register routes
require_once 'src/routes.php';

// Run app
$app->run();
