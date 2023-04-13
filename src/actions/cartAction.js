export const menuData = (num) => {
    return async function(dispatch) {
    fetch(`http://localhost:5000/menus/${num}`)
    .then(res => res.json())
    .then(posts =>dispatch(
        {
            type:'MENU',
            payload: posts
        }))
    }
  };