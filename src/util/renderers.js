export const getRenderer = (story, renderers) => {
    let probable = renderers.map(r => {
        return {
            ...r,
            testerResult: r.tester(story)
        }
    }).filter(r => r.testerResult.condition);
    probable.sort((a, b) => b.testerResult.priority - a.testerResult.priority);
    return probable[0].renderer;
}