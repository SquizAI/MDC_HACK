export default function Schedule() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Event Schedule</h2>
      
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4">Day 1: Kickoff & Ideation</h3>
          <ul className="space-y-2">
            <li>• Overview and Introduction</li>
            <li>• Keynote Speakers</li>
            <li>• Design Thinking Workshop</li>
            <li>• Technical Diagrams Workshop</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4">Day 2: Coding & Development</h3>
          <ul className="space-y-2">
            <li>• Project Planning & Kickoff</li>
            <li>• Development Environment Setup</li>
            <li>• Coding Sessions</li>
            <li>• Mid-Day Demo</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-semibold mb-4">Day 3: Presentations & Judging</h3>
          <ul className="space-y-2">
            <li>• Final Touches</li>
            <li>• Team Presentations</li>
            <li>• Technical Discovery</li>
            <li>• Awards Ceremony</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
