class ItemList extends React.Component {
static defaultProps = {
items: [],
};

render() {
return (
<ul>
{this.props.items.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
);
}
}
