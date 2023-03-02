<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;

return [
    (new Extend\Routes('forum'))
        ->get('/test-route', 'test.index', \App\Controller\HelloWorldController::class),
    (new Extend\View())
        ->namespace('test.index', __DIR__.'/views')
];
