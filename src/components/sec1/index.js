import MyModel from './model.js';

function Sec1() {
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    };

    return (
        <div style={divStyle}>
            <div>
                <h1>The Art and Science of Software: A Journey Through Lines of Code</h1>
                <h3>Hello! I'm Rohan, a dedicated and creative software developer with a passion for crafting elegant digital solutions. With a keen eye for detail and a drive for innovation, I turn concepts into reality and ideas into intuitive, user-friendly software.</h3>
            </div>
            <div>
                {<MyModel /> ? <MyModel/> : "Loading........."}
            </div>
        </div>
    );
}

export default Sec1;
