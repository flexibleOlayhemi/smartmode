<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\swiotmodel;
use Faker\Generator as Faker;

$factory->define(swiotmodel::class, function (Faker $faker) {
    return [
        //
        'fan'=>'0',
        'bulb'=>'0'
    ];
});
