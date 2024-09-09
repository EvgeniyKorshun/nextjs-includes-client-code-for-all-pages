export const LoaderComponent = async ({ slug }) => {
  if(slug === 'page1') {
    return await (import ("./ServerComponent1")).then(component => component.default())
  } else if (slug === 'page2') {
    return await (import ("./ServerComponent2")).then(component => component.default())
  }
}