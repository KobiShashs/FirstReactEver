import "./Main.css";
import myImage from '../../../Assets/Images/leo.jpg';
import Total from "../../MainArea/Total/Total";
import Workout from "../../MainArea/Workout/Workout";
import Clubs from "../../MainArea/Clubs/Clubs";
import Goals from "../../MainArea/Goals/Goals";
import Assists from "../../MainArea/Assists/Assists";
import MakeSound from "../../MainArea/MakeSound/MakeSound";
import BestTeam from "../../MainArea/BestTeam/BestTeam";
import Search from "../../MainArea/Search/Search";
import Clock from "../../MainArea/Clock/Clock";
function Main(): JSX.Element {
    // const url = 'https://media.giphy.com/media/loG32MXYyQl5vUJL46/giphy.gif';
    return (
        <div className="Main">


            {/* Interpolation */}
            {/* <Total/> */}

            {/* Conditional Rendering */}
            {/* <Workout/> */}

            {/* Displaying List */}
            {/* <Clubs/> */}

            {/* Props */}
            {/* <Goals team='FCB' numOfGoals={700}/> */}
            {/* Optional & Short Circuit */}
            {/* <Goals  numOfGoals={748}/> */}

            {/* Props */}
            {/* <Assists team='FCB' numOfAssists={500}/> */}

            {/* Events */}
            {/* <MakeSound/> */}

            {/* Events & State */}
            {/* <BestTeam/> */}

            {/* Two way Binding */}
            <Search/>

            {/* Life cycle Hooks */}
            <Clock/>

        </div>
    );
}

export default Main;
