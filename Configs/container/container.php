<?php

use DI\ContainerBuilder;

$builder = new ContainerBuilder();

$builder->addDefinitions(
    require __DIR__ . '/container_bindings.php'
);

return $builder->build();

