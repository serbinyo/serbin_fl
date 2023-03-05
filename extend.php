<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/ext/template.mods/js/dist/forum.js')
        ->css(__DIR__.'/ext/template.mods/js/css/style.css')
        ->route('/philosophy', 'progunity.philosophy')
];
