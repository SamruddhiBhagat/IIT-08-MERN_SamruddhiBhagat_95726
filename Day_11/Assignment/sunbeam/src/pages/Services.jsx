function Services() {
  const services = [
    "Web Development",
    "React Training",
    "Backend Development",
    "Full Stack Development"
  ]

  return (
    <div className="page">
      <h1>Our Services</h1>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  )
}

export default Services
