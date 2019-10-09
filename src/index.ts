import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the jupyter-ext extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-ext',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyter-ext is activated!');
  }
};

export default extension;
