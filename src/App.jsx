import { useState } from "react";
import fotoAI from "./assets/picture/ai.jpg";
import fotoBlockChain from "./assets/picture/blockchain.jpg";
import fotoQuantum from "./assets/picture/quantumcomputing.jpg";
import fotoVR from "./assets/picture/vr.jpg";
import "./App.css";

const ReloadButton = () => (
  <button
    onClick={() => window.location.href = "#"}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded-lg focus:outline-none"
  >
    Back to Home
  </button>
);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 shadow-md sticky top-0 z-50">
          <h1 className="text-3xl font-bold">DipsTech</h1>
        </header>

        {/* Main Content */}
        <main id="main" className="flex-grow p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Wellcome to the DipsTech.
            </h2>
            <p className="mb-4">
              Platform that makes it easier for you to learn more about various
              emerging technologies of today.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Card 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src={fotoAI}
                  alt="Artificial Intelligence"
                  className="rounded-md mb-4"
                />
                <a href="#ai">
                  <h3 className="text-xl font-bold mb-2">
                    Artificial Intelligence
                  </h3>
                </a>
                <p>
                  AI is revolutionizing industries with intelligent automation
                  and data-driven decision making.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src={fotoBlockChain}
                  alt="Blockchain"
                  className="rounded-md mb-4"
                />
                <a href="#blockchain">
                  <h3 className="text-xl font-bold mb-2">Blockchain</h3>
                </a>
                <p>
                  Secure and decentralized transactions are becoming more
                  popular thanks to blockchain technology.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src={fotoQuantum}
                  alt="Quantum Computing"
                  className="rounded-md mb-4"
                />
                <a href="#quantum">
                  <h3 className="text-xl font-bold mb-2">Quantum Computing</h3>
                </a>
                <p>
                  Explore the cutting-edge world of quantum computing and its
                  potential to solve complex problems.
                </p>
              </div>
              {/* Card 4 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                  src={fotoVR}
                  alt="Virtual Reality"
                  className="rounded-md mb-4"
                />
                <a href="#vr">
                  <h3 className="text-xl font-bold mb-2">Virtual Reality</h3>
                </a>
                <p>
                  VR technology is creating immersive experiences in gaming,
                  education, and training.
                </p>
              </div>
            </div>
          </div>
        </main>

        <section id="ai" className="flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Artificial Intelligence
            </h2>
            <p className="mb-4">
              Artificial Intelligence (AI) refers to the simulation of human
              intelligence in machines that are programmed to think like humans
              and mimic their actions. The term may also be applied to any
              machine that exhibits traits associated with a human mind such as
              learning and problem-solving.
            </p>
            <img
              src={fotoAI}
              alt="Artificial Intelligence Concept"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Applications of AI</h3>
            <p className="mb-4">
              AI is being used across various industries including healthcare,
              finance, automotive, and more. It helps in improving efficiency,
              automating tasks, and providing deep insights through data
              analysis.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Healthcare: AI algorithms can assist doctors in diagnosing
                diseases.
              </li>
              <li>
                Finance: AI is used for fraud detection and algorithmic trading.
              </li>
              <li>
                Automotive: Autonomous vehicles use AI to navigate and make
                decisions.
              </li>
            </ul>
            <p className="mb-4">
              The potential of AI is vast, and it continues to evolve rapidly,
              transforming how we interact with technology.
            </p>
            <ReloadButton/>
          </div>
        </section>
        <section id="blockchain" className="flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Blockchain Technology
            </h2>
            <p className="mb-4">
              Blockchain is a distributed ledger technology that allows data to
              be stored globally on thousands of servers while letting anyone on
              the network see everyone else's entries in real-time. This makes
              it difficult for one user to gain control of, or game, the
              network.
            </p>
            <img
              src={fotoBlockChain}
              alt="Blockchain"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Applications of Blockchain
            </h3>
            <p className="mb-4">
              Blockchain technology is being used across various sectors
              including finance, healthcare, supply chain management, and more.
              It is particularly known for its use in secure and transparent
              financial transactions through cryptocurrencies.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Finance: Blockchain is the backbone technology of Bitcoin and
                other cryptocurrencies.
              </li>
              <li>
                Supply Chain: Helps in tracking goods and ensuring their
                authenticity.
              </li>
              <li>
                Healthcare: Provides a secure and transparent way to store
                patient records.
              </li>
            </ul>
            <p className="mb-4">
              Blockchain's decentralized and secure nature makes it a
              transformative technology in various fields.
            </p>
            <ReloadButton/>
          </div>
        </section>
        <section id="quantum" className="flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Quantum Computing</h2>
            <p className="mb-4">
              Quantum computing is an area of computing that leverages the
              principles of quantum mechanics to perform computations at speeds
              unattainable by classical computers. Quantum computers use quantum
              bits (qubits) which can represent and process a vast amount of
              data simultaneously.
            </p>
            <img
              src={fotoQuantum}
              alt="Quantum Computing"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Applications of Quantum Computing
            </h3>
            <p className="mb-4">
              Quantum computing holds the potential to revolutionize various
              fields by solving complex problems that are currently intractable
              for classical computers. Some potential applications include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Cryptography: Quantum algorithms could potentially break
                traditional encryption methods, leading to new approaches to
                secure communication.
              </li>
              <li>
                Optimization: Solving complex optimization problems in
                logistics, finance, and other areas more efficiently.
              </li>
              <li>
                Drug Discovery: Accelerating the process of drug discovery by
                simulating molecular structures more accurately.
              </li>
            </ul>
            <p className="mb-4">
              The development of quantum computing is still in its early stages,
              but its potential impact on technology and science is immense.
            </p>
            <ReloadButton/>
          </div>
        </section>
        <section id="vr" className="flex-grow p-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Virtual Reality</h2>
            <p className="mb-4">
              Virtual Reality (VR) is an immersive technology that simulates a
              realistic environment through the use of computer-generated
              imagery, allowing users to interact with a 3D space. VR is used in
              various fields including gaming, training, and therapy.
            </p>
            <img
              src={fotoVR}
              alt="Virtual Reality"
              className="rounded-md mb-4"
            />
            <h3 className="text-xl font-bold mb-2">
              Applications of Virtual Reality
            </h3>
            <p className="mb-4">
              VR technology is transforming multiple industries by providing
              interactive and immersive experiences. Some notable applications
              include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Gaming: VR creates immersive gaming experiences that engage
                players in new ways.
              </li>
              <li>
                Training: VR is used for training in various fields such as
                aviation, military, and medicine.
              </li>
              <li>
                Therapy: VR is employed in therapeutic settings to treat
                phobias, PTSD, and other conditions.
              </li>
            </ul>
            <p className="mb-4">
              As VR technology advances, it continues to offer innovative
              solutions and experiences that were previously unimaginable.
            </p>
            <ReloadButton/>
          </div>
        </section>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Section 1: Logo & About */}
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-bold mb-4">DipsTech</h2>
                <p className="text-center md:text-left">
                  DipsTech is your go-to platform for the latest technology
                  news, reviews, and insights. Stay updated with happenings in
                  the tech world.
                </p>
              </div>
              <div></div>
              {/* Section 2: Contact Info */}
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-center md:text-left">
                  <li>Email: dipsy@dipstech.com</li>
                  <li>Phone: +62 821 3721 3821</li>
                  <li>Address: Jauh make helm, Tangerang Selatan.</li>
                </ul>
              </div>
            </div>
            {/* Copyright */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
              <p className="text-lg font-semibold mb-2">DipsTech</p>
              <p className="mb-4">
                Discover the latest advancements in technology and stay informed
                about emerging trends such as Artificial Intelligence,
                Blockchain, Quantum Computing, and Virtual Reality.
              </p>
              <p className="text-sm">
                &copy; 2024 DipsTech. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
