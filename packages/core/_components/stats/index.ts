import StatsGroup from './StatsGroup.svelte';
import _StatsItem from './StatsItem.svelte';
import StatsItemActions from './StatsItemActions.svelte';
import StatsItemDescription from './StatsItemDescription.svelte';
import StatsItemFigure from './StatsItemFigure.svelte';
import StatsItemTitle from './StatsItemTitle.svelte';
import StatsItemValue from './StatsItemValue.svelte';

(_StatsItem as typeof StatsItem).Actions = StatsItemActions;
(_StatsItem as typeof StatsItem).Description = StatsItemDescription;
(_StatsItem as typeof StatsItem).Figure = StatsItemFigure;
(_StatsItem as typeof StatsItem).Title = StatsItemTitle;
(_StatsItem as typeof StatsItem).Value = StatsItemValue;

const StatsItem = _StatsItem as typeof _StatsItem & {
    Actions: typeof StatsItemActions;
    Description: typeof StatsItemDescription;
    Figure: typeof StatsItemFigure;
    Title: typeof StatsItemTitle;
    Value: typeof StatsItemValue;
};

export {
    StatsGroup,
    StatsItem,
    StatsItemActions,
    StatsItemDescription,
    StatsItemFigure,
    StatsItemTitle,
    StatsItemValue,
};
