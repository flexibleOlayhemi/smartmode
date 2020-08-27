<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facade\DB;
use App\swiotmodel;
use App\Events\statusUpdatedEvent;

class iotController extends Controller
{
    public function index(){

        $status = swiotmodel::first(['fan','bulb']);
        return response()->json($status);
    }
   

    public function update(Request $request){
        
         swiotmodel::first()->update(['fan'=>$request['fan'],'bulb'=>$request['bulb']]);
       
         
         broadcast(new statusUpdatedEvent('Status as been updated'))->toOthers();
         return response()->json([
            'message' => 'Status Updated'
         ]);

         
         

    }
}
