import { NextResponse } from 'next/server';
import { getRepos } from '@/lib/github';

// Replace with your GitHub username
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'amirjimdaniels';

export async function GET() {
  try {
    const repos = await getRepos(GITHUB_USERNAME);
    
    return NextResponse.json(repos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}
