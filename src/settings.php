<?php
return [
    'settings' => [
        // set to false in production
        'displayErrorDetails'    => true,

        // Allow the web server to send the content-length header
        'addContentLengthHeader' => false,

        // Renderer settings
        'renderer'               => [
            'template_path' => __DIR__ . '/../templates/',
        ],
    ],
];