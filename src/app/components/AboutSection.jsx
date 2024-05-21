"use client"
import React, {useState, useTransition} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Technical Skills",
        id: "#skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>UX/UI</li>
                <li>Frontend Developer</li>
                <li>Web Developer</li>
                <li>Software Developer</li>
                <li>Microsoft Office</li>
                <li>Problem Solving</li>
            </ul>
        )
    },
    {
        title: "Soft Skills",
        id: "#softskills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Team Player</li>
                <li>Active Listener</li>
                <li>Strong Communication Skill</li>
                <li>Adaptability to Change</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "#education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Cebu Institute of Technology - University: Bachelor of Science in Computer Science (2021-2025)</li><br/>
                <li>Cebu Institute of Technology - University: Science, Technology, Engineering, Mathematics (2019-2021)</li><br/>
                <li>University of San Jose - Recoletos: Junior High School (2015-2019)</li><br/>
            </ul>
        )
    },
    {
        title: "Languages/Frameworks/Tools",
        id:"#lft",
        content: (
            <ul className='list-disc pl-2'>
                <li>Javascript, HTML, CSS</li>
                <li>ReactJS, BootStrap, Tailwind</li>
                <li>Java</li>
                <li>C, C++, C#</li>
                <li>Adobe XD, Figma</li>
                <li>Python, Django</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (title) => {
        startTransition(() => {
            setTab(title);
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4  xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/pc.jpg" width={800} height={400} alt="PC Image"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        Propelled and energetic student
                        who is enthusiastic about 
                        designing UI/UX, web
                        and software development,
                        backed by strong grasp of
                        programming principles. I excel
                        in design and problem solving,
                        proficient in select design tools. I
                        am eager to deliver impactful
                        results and contribute to the
                        success of a progressive
                        organization. Seeking challenging
                        opportunities to apply my skills,
                        foster growth, and gain practical
                        experience. Committed to
                        learning, achieving excellence
                        and gain hands-on experience
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("Technical Skills")} active={tab === "Skills"}> T-Skills </TabButton>
                        <TabButton selectTab={() => handleTabChange("Soft Skills")} active={tab === "Skills2"}> S-Skills </TabButton>
                        <TabButton selectTab={() => handleTabChange("Languages/Frameworks/Tools")} active={tab === "Languages/Frameworks/Tools"}> Languages/Frameworks/Tools </TabButton>
                        <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}> Education </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.title === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection
