import React, {useEffect} from "react";
import styles from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {setBlackTheme, setLightTheme} from "../../store/styleSlice.ts";

const Header = () => {
    const style = useSelector((state) => state.styleSlice.style);
    const dispatch = useDispatch();

    const handleSetBlackTheme = () => {
        dispatch(setBlackTheme());
    };

    const handleSetLightTheme = () => {
        dispatch(setLightTheme());
    };

    // useEffect(() => {
    //     console.log('dispatch')
    // },[dispatch])

    return (
        <div className={styles.container} style={{backgroundColor: style.backGroundColor, color: style.color}}>
            <div>
                <h1 >LOGO</h1>
            </div>
            <div>
                <div>
                    <button onClick={handleSetBlackTheme}>black</button>
                </div>
                <div>
                    <button onClick={handleSetLightTheme}>light</button>
                </div>
            </div>
        </div>
    )
}
export default Header;
