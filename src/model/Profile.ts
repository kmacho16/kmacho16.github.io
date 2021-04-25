import Project from './Project';

export default interface Profile {
  avatar: string;
  about: string;
  projects: Project[];
}
