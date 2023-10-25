import MyModel from './model.js';

function Sec1() {
    const divStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    return (
        <div style={divStyle}>
            <div>
                <h1>sec1</h1>
            </div>
            <div>
                <MyModel />
            </div>
        </div>
    );
}

export default Sec1;
