import CollectionsOverview from "../collections-overview/collections-overview.component";
const Home = props => {
    let {cartItems} = props;
    return (
        <div>
            <CollectionsOverview onAdd={props.onAdd}></CollectionsOverview>
        </div>
    );
}

export default Home;