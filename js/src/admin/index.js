/*
 * This file is part of datlechin/flarum-discussion-count.
 *
 * Copyright (c) 2022d Datlechin.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';


app.initializers.add('datlechin/flarum-discussion-count', () => {

  app.extensionData
    .for('datlechin-discussion-count')
    .registerSetting(
      {
        setting: 'datlechin-flarum-discussion-count.BarChart',
        name: 'BarChart',
        type: 'number',
        label: app.translator.trans('Divisor Adjustment (Larger divisor for larger forums)'),
      },
      30 // Optional: Priority
    )
});
