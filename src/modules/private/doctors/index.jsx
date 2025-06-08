import { useEffect, useState } from "react";
import { PageHeader } from "../../../layout/dashboardLayout/components";
import { Table, Modal, Button } from "../../../generalComponents";
import { InfoIcon } from "../../../assets/svgAssets";
import { DoctorInfoModal } from "../../../modals";

export const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    specialization: "Gastroenterology",
    experience: "15 years",
    expertise: "Peptic Ulcer Disease",
    qualifications: ["MD", "FACG", "Gastroenterology Fellowship"],
    research: "Published 20+ papers on H. pylori treatment",
    successRate: "95%",
    patientsTreated: "2000+",
    bio: "Distinguished gastroenterologist specializing in peptic ulcer disease. Completed medical training at Harvard Medical School and fellowship at Mayo Clinic. Known for innovative approaches to H. pylori treatment with a 95% success rate in complex cases.",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    email: "michael.chen@example.com",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
    specialization: "Gastroenterology",
    experience: "12 years",
    expertise: "Stress Ulcer Management",
    qualifications: ["MD", "PhD", "Gastroenterology Board Certified"],
    research: "Leading expert in stress ulcer prevention",
    successRate: "92%",
    patientsTreated: "1500+",
    bio: "Renowned gastroenterologist with expertise in stress ulcer management. MD and PhD from Stanford University. Specializes in comprehensive treatment plans addressing both physical and psychological aspects of stress-related ulcers.",
  },
  {
    id: 3,
    name: "Dr. Aisha Rahman",
    email: "aisha.rahman@example.com",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
    specialization: "Gastroenterology",
    experience: "8 years",
    expertise: "Refractory Ulcer Treatment",
    qualifications: ["MD", "FACG", "Advanced Endoscopy Fellowship"],
    research: "Specialized in complex ulcer cases",
    successRate: "90%",
    patientsTreated: "1000+",
    bio: "Skilled gastroenterologist specializing in refractory ulcer treatment. Trained at Johns Hopkins University and Cleveland Clinic. Expert in combining traditional and advanced endoscopic procedures for complex cases.",
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    email: "james.wilson@example.com",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
    specialization: "Gastroenterology",
    experience: "20 years",
    expertise: "Ulcer Surgery & Management",
    qualifications: ["MD", "FACS", "Surgical Gastroenterology"],
    research: "Pioneer in minimally invasive ulcer surgery",
    successRate: "97%",
    patientsTreated: "3000+",
    bio: "Pioneer in surgical gastroenterology with 20 years of experience. Yale Medical School graduate specializing in minimally invasive ulcer surgery. Performed over 3,000 successful procedures with innovative recovery techniques.",
  },
];

export const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "Doctors | Radyab-e-Zakhm";
  }, []);

  const selectedLanguage = localStorage.getItem("language");

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const doctorColumns = [
    {
      title: "Doctor",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            alt={`${text}'s photo`}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-primary-text">{text}</div>
            <div className="text-xs text-secondary-text">{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      title: "Specialization",
      dataIndex: "specialization",
      key: "specialization",
    },
    {
      title: "Patients Treated",
      dataIndex: "patientsTreated",
      key: "patientsTreated",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="text-secondary-text p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            onClick={() => handleDoctorSelection(record)}
          >
            <InfoIcon width={20} height={20} />
          </button>
        </div>
      ),
      width: 75,
    },
  ];

  return (
    <main className="w-full min-h-dvh bg-surface-2">
      <PageHeader title="Ulcer Specialists" />
      <div
        className={`lg:flex-row p-6 flex gap-6 flex-col flex-1 lg:bg-neutral-50/75 lg:dark:bg-neutral-900 ${
          selectedLanguage === "ur" ? "rounded-tr-[40px]" : "rounded-tl-[40px]"
        } h-[calc(100vh-81px-80px)] lg:h-[calc(100vh-81px)] overflow-y-auto`}
      >
        {/* Mobile View */}
        <div className=" flex flex-col gap-6 flex-1/2">
          <div className="max-w-4xl w-full mx-auto flex flex-col gap-4 p-4 lg:p-8 rounded-[32px] bg-neutral-0 dark:bg-neutral-800">
            <Table columns={doctorColumns} data={doctorsData} />
          </div>
        </div>

        {/* Desktop View */}
        {/* <div className="hidden lg:flex flex-col gap-6 flex-1">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-2 gap-6 p-8">
            {doctorsData.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
                onInfoClick={handleOpenModal}
              />
            ))}
          </div>
        </div> */}
      </div>

      {showModal && (
        <DoctorInfoModal
          showModal={showModal}
          setShowModal={setShowModal}
          doctor={selectedDoctor}
        />
      )}
    </main>
  );
};
