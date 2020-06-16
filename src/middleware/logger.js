export default (store) => (next) => (action) => {
    console.group("ACTION")
    console.log("ACTION: ", action)
    const returnValue = next(action)
    console.log("NEW STATE: ", store.getState())
    console.groupEnd()
    return returnValue
}