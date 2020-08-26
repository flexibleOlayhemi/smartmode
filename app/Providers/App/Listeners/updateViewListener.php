<?php

namespace App\Providers\App\Listeners;

use App\Events\statusUpdatedEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;


class updateViewListener
{
    
     /* Handle the event.
     *
     * @param  statusUpdatedEvent  $event
     * @return void
     */
    public function handle(statusUpdatedEvent $event)
    {
        
        
    }

}
