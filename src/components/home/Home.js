import CollectionsOverview from "../collections-overview/collections-overview.component";
const Home = props => {
    return (
        <div>
            <CollectionsOverview onAdd={props.onAdd}
                items={props.items} 
                onDeleteItem={props.onDeleteItem} />
        </div>
    );
}

export default Home;