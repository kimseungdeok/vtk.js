import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

const container = document.querySelector('#container');

// We use the wrapper here to abstract out manual RenderWindow/Renderer/OpenGLRenderWindow setup
const genericRenderWindow = vtkGenericRenderWindow.newInstance();
genericRenderWindow.setContainer(container);
genericRenderWindow.resize();

const renderer = genericRenderWindow.getRenderer();
const renderWindow = genericRenderWindow.getRenderWindow();

const actor  = vtkActor.newInstance();
const mapper = vtkMapper.newInstance();
// this generates a cone
const ConeSource = vtkConeSource.newInstance({
    height: 1.0,
});

mapper.setInputConnection(coneSource.getOutputPort());
actor.setMapper(mapper);

// --- Add actor to scene ---
renderer.addActor(actor);

// --- Reset camera and render the scene ---
renderer.resetCamera();
renderWindow.render();