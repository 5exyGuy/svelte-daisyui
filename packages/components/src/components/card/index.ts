import _Card from './Card.svelte';
import CardActions from './CardActions.svelte';
import CardBody from './CardBody.svelte';
import CardContent from './CardContent.svelte';
import CardFigure from './CardFigure.svelte';
import CardTitle from './CardTitle.svelte';

(_Card as typeof Card).Actions = CardActions;
(_Card as typeof Card).Body = CardBody;
(_Card as typeof Card).Content = CardContent;
(_Card as typeof Card).Figure = CardFigure;
(_Card as typeof Card).Title = CardTitle;

const Card = _Card as typeof _Card & {
    Actions: typeof CardActions;
    Body: typeof CardBody;
    Content: typeof CardContent;
    Figure: typeof CardFigure;
    Title: typeof CardTitle;
};

export { Card, CardActions, CardBody, CardContent, CardFigure, CardTitle };
