import { ContainerInstance, DockerConfig } from '@/types';

// In-memory store for demo purposes
// In production, you'd use a database or Docker API directly
const containers = new Map<string, ContainerInstance>();

export async function startContainer(
  projectId: string,
  config: DockerConfig
): Promise<ContainerInstance> {
  const id = `${projectId}-${Date.now()}`;
  
  const instance: ContainerInstance = {
    id,
    projectId,
    status: 'starting',
    createdAt: new Date(),
  };

  containers.set(id, instance);

  // Simulate container startup
  // In production, this would call Docker API or AWS ECS/Fargate
  try {
    // Simulated delay for container startup
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const port = 3000 + Math.floor(Math.random() * 1000);
    
    instance.status = 'running';
    instance.port = port;
    instance.url = `http://localhost:${port}`;
    
    containers.set(id, instance);
    
    return instance;
  } catch (error) {
    instance.status = 'error';
    instance.error = error instanceof Error ? error.message : 'Unknown error';
    containers.set(id, instance);
    return instance;
  }
}

export async function stopContainer(containerId: string): Promise<boolean> {
  const container = containers.get(containerId);
  
  if (!container) {
    return false;
  }

  container.status = 'stopping';
  containers.set(containerId, container);

  // Simulate container stopping
  await new Promise(resolve => setTimeout(resolve, 1000));

  container.status = 'stopped';
  containers.set(containerId, container);

  // Clean up after a delay
  setTimeout(() => {
    containers.delete(containerId);
  }, 5000);

  return true;
}

export function getContainer(containerId: string): ContainerInstance | null {
  return containers.get(containerId) || null;
}

export function getContainersByProject(projectId: string): ContainerInstance[] {
  return Array.from(containers.values()).filter(c => c.projectId === projectId);
}

export function getAllContainers(): ContainerInstance[] {
  return Array.from(containers.values());
}

// Docker commands for reference (used in production)
export const dockerCommands = {
  pull: (image: string) => `docker pull ${image}`,
  run: (config: DockerConfig, name: string) => {
    const envFlags = config.env
      ? Object.entries(config.env)
          .map(([k, v]) => `-e ${k}=${v}`)
          .join(' ')
      : '';
    return `docker run -d --name ${name} -p ${config.port}:${config.port} ${envFlags} ${config.image}${config.command ? ` ${config.command}` : ''}`;
  },
  stop: (name: string) => `docker stop ${name}`,
  remove: (name: string) => `docker rm ${name}`,
  logs: (name: string) => `docker logs ${name}`,
  status: (name: string) => `docker inspect ${name} --format='{{.State.Status}}'`,
};
