import {InfinitySpin} from 'react-loader-spinner'
export const Loader = () => {
    return (<div style={{display:'flex' , justifyContent: 'center'}}>
        <InfinitySpin 
        width='200'
        color="rgb(67, 79, 253)"
        />
    </div>
    )
}