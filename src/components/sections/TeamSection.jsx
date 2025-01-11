import React from 'react';
import Section from '../utils/Section';

const TeamSection = ({ teamData }) => (
    <Section heading="Team">
        <div>
            {/* <h2 className="text-2xl font-bold mb-6">Team</h2> */}
            <p className="mb-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>

            <div className="space-y-4">
                {teamData.map((member, index) => (
                    <div key={index} className="bg-blue-50 p-6 rounded-lg flex items-start">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 rounded-lg object-cover mr-6"
                        />
                        <div>
                            <h3 className="font-bold text-lg">{member.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{member.designation}</p>
                            <p className="text-gray-600">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

export default TeamSection;
