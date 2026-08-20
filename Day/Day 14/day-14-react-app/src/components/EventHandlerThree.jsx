function ActionButtons({onGreet, onShowInfo}) {
    return(
        <div>
            <button onClick={onGreet}>Greet</button>
            <button onClick={onShowInfo}>Show Info</button>
        </div>
    );
}

function ActionButtonDemo() {
    function handleGreet() {
        alert("Hello from parent");
    }
    function handleShowInfo() {
        alert("Info button clicked");
    }

    return(
        <div>
            <h2>Action Buttons Demo</h2>
            <ActionButtons onGreet={handleGreet} onShowInfo = {handleShowInfo}/>
        </div>
    )
}
export default ActionButtonDemo;