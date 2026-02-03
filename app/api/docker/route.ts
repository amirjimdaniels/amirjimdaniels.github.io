import { NextRequest, NextResponse } from 'next/server';
import { startContainer, stopContainer, getContainer } from '@/lib/docker';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, action, config } = body;

    if (!projectId) {
      return NextResponse.json(
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    switch (action) {
      case 'start':
        if (!config) {
          return NextResponse.json(
            { error: 'Docker config is required for start action' },
            { status: 400 }
          );
        }
        const container = await startContainer(projectId, config);
        return NextResponse.json(container);

      case 'stop':
        const { containerId } = body;
        if (!containerId) {
          return NextResponse.json(
            { error: 'Container ID is required for stop action' },
            { status: 400 }
          );
        }
        const stopped = await stopContainer(containerId);
        return NextResponse.json({ success: stopped });

      case 'status':
        const { id } = body;
        if (!id) {
          return NextResponse.json(
            { error: 'Container ID is required for status action' },
            { status: 400 }
          );
        }
        const status = getContainer(id);
        return NextResponse.json(status || { error: 'Container not found' });

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('Error handling container request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const containerId = searchParams.get('id');

  if (!containerId) {
    return NextResponse.json(
      { error: 'Container ID is required' },
      { status: 400 }
    );
  }

  const container = getContainer(containerId);
  
  if (!container) {
    return NextResponse.json(
      { error: 'Container not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(container);
}
