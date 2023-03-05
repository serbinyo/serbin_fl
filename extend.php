<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use App\Controller\PhilosophyController;
use Flarum\Extend;

return [
    (new Extend\Routes('forum'))
        ->get('/philosophy', 'philosophy.index', PhilosophyController::class),
    (new Extend\View())
        ->namespace('philosophy.index', __DIR__.'/views'),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/ext/skeleton/js/dist/forum.js')
];
