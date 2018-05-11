<?php

class Database {

    private $mysqli_conn;

    public function __construct($DBServer, $DBUser, $DBPass, $DBName) {
        $conn = new mysqli($DBServer, $DBUser, $DBPass, $DBName);

        // check connection
        if ($conn->connect_error) {
            trigger_error('Database connection failed: ' . $conn->connect_error, E_USER_ERROR);
        }

        $this->mysqli_conn = $conn;
    }

    /**
     * @return mixed
     */
    public function getMysqliConn(): mysqli {
        return $this->mysqli_conn;
    }
}