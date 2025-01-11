import React from 'react';
import TokenomicsSection from './Tokenomic';
import TeamSection from './TeamSection';

const TokenomicsTeamPage = () => {
    const distributionData = [
        { name: 'Crowdsale ', value: 75 },
        { name: 'Foundation', value: 25 }
    ];

    const teamData = [
        { name: 'Virendra', designation: 'CEO', image: '/api/placeholder/100/100', description: 'Lorem ipsum...' },
        { name: 'Yogesh Sharma', designation: 'CTO', image: '/api/placeholder/100/100', description: 'Lorem ipsum...' },
        { name: 'Pranav Bhansali', designation: 'CTO', image: '/api/placeholder/100/100', description: 'Lorem ipsum...' }
    ];

    const COLORS = ['#4885ed', '#ff7043'];

    return (
        <div className="max-w-6xl mx-auto p-6">
            <TeamSection teamData={teamData} />
        </div>
    );
};

export default TokenomicsTeamPage;
