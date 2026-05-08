import AboutApp from '../applications/about/AboutApp';
import ProjectsApp from '../applications/projects/ProjectsApp';

export const appRegistry = {
    about: {
        title: 'About Me',
        component: AboutApp
    },

    projects: {
        title: 'Projects',
        component: ProjectsApp
    }
};

