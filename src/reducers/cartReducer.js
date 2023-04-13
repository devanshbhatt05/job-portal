const initialState={
    items:{}
}
const menu=(state=initialState,action)=>
{
    switch(action.type)
    {
        case "MENU":
            return {
                    items: action.payload
                }
        default:
            return state;
    }
};
export default menu;