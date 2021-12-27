import React from 'react';
import Page from '../components/core/page/Page';
import InnerPages from '../components/core/page/InnerPages';

const WhyHireUs = () => {
	return (
		<Page>
			<InnerPages title='Why Hire Us' page='whu'>
				<Item title='OUR TEAM'>
					<p>
						A dream team rarely happens. A team, in which every individual knows
						his responsibilities and has the high spirits to excel and execute
						their roles with a positive attitude. It is teamwork that finally
						bears the fruit and pays the benefits. Every member of the
						{`"Dignity
						International Agency"`}
						- Overseas Employment Team is talented and dedicated to his
						responsibilities. And they are ready to serve with a smile.
					</p>
					<p>
						We at {`Dignity International Agency`} are well experienced with our
						responsibilities. The HR panel comprises leading Doctors, Engineers,
						Chartered Accountants, Lawyers and HR Consultants. An additional
						panel of Specialist Engineers and Technicians are also available for
						the specific selection of candidates. Our client{'`'}s individual
						objectives are our first priority at the time of final selection.
					</p>
				</Item>
				<Item title='Our Goal'>
					<p>
						{`"To provide the best and the most qualified Bangladeshi worker to
						our clients, by bringing the best people together"`}
						.
					</p>
				</Item>
				<Item title={`Our Team's Commitment`}>
					<ul>
						<li>
							To continuously initiate innovative placement solutions and
							processes
						</li>
						<li> To take ownership of responsibility as a team player</li>
						<li>
							To create a positive working atmosphere consisting of mutual
							respect and accountability
						</li>
					</ul>
				</Item>
				<Item title='Our Valued Commitment to our valued employers'>
					<p>
						We make certain to provide qualified and suitable candidates which
						are required for every job opening We guarantee our employers that
						we will find, employ, and retain for them, value-added future
						employees.
					</p>
				</Item>
				<Item title='Assurance to our valued applicants'>
					<p>
						We are dedicated to respecting the rights and protecting the welfare
						of each and every applicant. We uphold the promise to provide more
						convenient, invaluable assistance throughout the application process
						-from document submission, follow-ups, testing, and interviewing -
						to requirement processing.
					</p>
				</Item>
				<Item title='OUR VISION'>
					<p>
						The vision of {`"Dignity International Agency"`} is to become one of
						the most trusted and credible resources in the world through
						providing our clients services and opportunities to individual
						employee development and work unit effectiveness.
					</p>
				</Item>
				<Item title='OUR MISSION'>
					<p>
						The {`"Dignity International Agency"`} business strives to achieve
						success through delivery, integrity, and services quality. Our
						mission is to provide a truly consultative and value-added that
						allows our clients to achieve their strategic staffing needs and
						support our candidates in meeting their career goals.Dignity
						International Agency - utilizes various Internet Applications for
						managing the sourcing, recruitment, and placement processes. We use
						technology to provide a more responsive and effective user
						experience, which is eventually integrated into the existing
						processes of client companies thus creating the best communication
						in an attempt to give the best service at a low-cost recruitment
						process.
					</p>
				</Item>
				<Item title='EMPLOYER RESPONSIBILITIES'>
					<ul>
						<li>
							Demand Letter clearly specifying all the terms of employment -
							specimen will be provided on demand.
						</li>
						<li>
							Power of Attorney (Wokala) - Consultation can be taken from any
							local Saudi recruitment office Wakala should be attested from
							chamber of commerce and from the Ministry of foreign affairs.
						</li>
						<li>
							Copy of the Commercial Registration (CR) of the Saudi Recruiting
							Office from whom the Power of Attorney (Wakala) has been made.
						</li>
						<li>
							Copy of the Commercial Registration(CR) of the Employer{`'`}s
							Company.
						</li>
						<li>Copy of the Visa Payment Slip (Amar Teehsil).</li>
						<li>Copy of the Sponsor{`'`}s Identity Card(Tabiyaa).</li>
					</ul>
				</Item>
				<Item title='SELECTION'>
					Selection is being done as per instruction by our valuable clients,
					There are six types of interview selection tools available with
					{`"Dignity International Agency"`}.
				</Item>
				<Item title='Face to Face Interviews'>
					<ul>
						<li>
							Group interviews are carried out to short listed candidates.
						</li>
						<li>
							Individual Interview in this style of interviews the delegate meet
							the pre screened candidates on a one to one basis.
						</li>
						<li>
							Trade test candidates skills are tested practically to evaluate
							the workmanship and its conformity to international standards.
						</li>
						<li>
							Final interview depending on the requirement of the client, the
							final interview can be conducted either by our officials or the
							Client delegate.
						</li>
						<li>Telephone Interview.</li>
					</ul>
				</Item>
				<Item title='GUARANTEE'>
					<p>
						We stand guarantee for all persons selected by us. Anybody unfit be
						referred to us (during 90 days) after mutual decision, we will
						repatriate him to his country at our expense. We can give all sort
						of guarantee according to the rules, regulation and labor.
					</p>
				</Item>
				<Item title='OFFICE STAFF'>
					<ul>
						<li>Managing Director</li>
						<li>International Relationship Manager</li>
						<li>Head, Information Technology</li>
						<li>Administrative Officer</li>
						<li>Head, Human Resource Department</li>
						<li>Accounting Officer</li>
						<li>Computer Programmer</li>
						<li>Office Boy</li>
						<li>1 Security Guard</li>
					</ul>
				</Item>
			</InnerPages>
		</Page>
	);
};

const Item = ({ title, children }) => {
	return (
		<>
			<h5>{title}</h5>
			{children}
		</>
	);
};

export default WhyHireUs;
