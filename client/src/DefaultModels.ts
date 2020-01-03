export const ContextTypes = ["A", "B"]

export const DefaultModels = {

    contextTypes: ContextTypes.map(x => ({
        typeId: x,
        title: x
    }))

}
