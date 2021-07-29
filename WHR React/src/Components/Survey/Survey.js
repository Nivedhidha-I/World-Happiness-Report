import './Survey.css';

function Survey(){
    return(
        <div>
            <form action="/surveycomplete">
                <input type="checkbox" required/><br/>
                <input type="radio"/><br/>
                <input type="range" /><br/>
                <input type="reset"/><br/>
                <input type="submit"/><br/>
                <input type="text"/><br/>
            </form>
        </div>
    )
}

export default Survey;