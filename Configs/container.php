<?php

$container = new DI\Container();

(require __DIR__ . '/container_bindings.php')($container);

return $container;
