import IMG5 from '../../assets/flx.png'
import IMG6 from '../../assets/str.png'
import IMG7 from '../../assets/fire-dynamic-color.png'
import IMG8 from '../../assets/target-dynamic-color.png'
import {FaTools} from 'react-icons/fa'
import {BsBriefcaseFill} from 'react-icons/bs'

const data = [
    {
        id: 1, 
        anim: "fade-left",
        img: IMG6,
        title: 'Technical Project Manager at NDA', 
        focus: 'CRM , CMS , AI', 
        tech: 'php , python , node.js , tablau , muscul , postgraseSQL , prometheus , new relic , jenkins , terraform , gitlab , maven. ', 
        pitchimg: IMG8,
        pitch: 'Driving project software development from idea to launch within a deadline. Building teams, establishing effective processes, and excellent cooperation across diverse departments. Perform risk analysis to reduce project risks, roadmap development, and budget planning.',
        icon: <BsBriefcaseFill/>,
        p1:'Manage the advanced teams with 15+ direct subordinates (backend, ml, devops, QAs and designers) in order solve business issues.', 
        p2:'Create the vision of feature development, behavior of functionality, generating ideas for enhancements of the product, and new feature development.', 
        p3:'Collect, define and translate business/product objectives into the technical requirements, tasks and distribute to development team.',
        p4:'Create and maintain wireframes, workflows, diagrams, user stories, and comprehensive project documentation.',
    }, 
    
    {
        id: 2, 
        anim: "fade-right",
        img: IMG5, 
        link: 'https://flex.com/',
        title: 'Software Developer at Flex', 
        focus: 'ERP , WMS , SRM , EDI', 
        tech:'python , django , oop , sql , elasticsearch , linux , json , xml , git , rocket universe , perl , zpl. ', 
        pitchimg: IMG7,
        pitch: "Improved upon existing console applications and created new ones (for the use inside company's warehouses and factories). Developed Python interfaces for existing functionality (written on BASIC). Incorporated Django REST Framework for a more dynamic and modern UI/UX.",
        icon: <FaTools/>,
        p1: 'Conduct in-depth analysis and investigation of existing code due to large amount of customization and poor technical documentation.  ', 
        p2:'Proactive approach to problem-solving, identifying and resolving them before the impacts are felt by the business.', 
        p3:'Technical backlog preparation, management of the issues lifecycle, iteration planning, and leading the elaboration of tasks.' ,
        p4:'Create and maintain, class interaction diagrams, db models schemes, and comprehensive technical documentation.',
    }, 

]

export default data;


/*

    {
        id: 1, 
        anim: "fade-left",
        img: IMG6, 
        title: 'Technical Project Manager at NDA · 2yrs', 
        focus: 'CRM , CMS , AI', 
        tech: 'php , python , node.js , tablau , muscul , postgraseSQL , prometheus , new relic , jenkins , terraform , gitlab , maven. ', 
        pitchimg: IMG8,
        pitch: 'Driving projects software development from idea to launch, leading cross-functional globally distributed teams towards shared goals. Building teams, establishing effective processes and excellent cooperation across diverse departments. Perform risk analysis to reduce project risks, roadmap development, UI/UX research, and MVP design.',
        icon: <BsBriefcaseFill/>,
        p1:'Manage the advanced teams with 15+ direct subordinates (backend, ml, devops, QAs and designers) in order solve business issues.', 
        p2:'Create the vision of feature development, behavior of functionality, generating ideas for enhancements of the product, and new feature development.', 
        p3:'Collect, define and translate business/product objectives into the technical requirements, tasks and distribute to development team.',
        p4:'Create and maintain wireframes, workflows, diagrams, user stories, and comprehensive project documentation.',
    }, 

*/