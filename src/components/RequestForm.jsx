import { useState } from "react";

function RequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    size: "",
    designIdea: "",
    budget: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Backend comes later
    console.log(formData);
  };

  return (
    <section className="request-section" id="request">
      <div className="request-container">

        <div className="request-copy">
          <span className="section-eyebrow">
            LET'S MAKE SOMETHING ✦
          </span>

          <h2>
            Tell me what
            <span> you're imagining.</span>
          </h2>

          <p>
            Have a birthday, graduation, party, or something completely
            different coming up? Send me the details and I'll get back to
            you about bringing your idea to life.
          </p>

          <div className="request-note">
            <span>✷</span>
            <p>
              Every piece is custom, so pricing may vary depending on
              size and design complexity.
            </p>
          </div>
        </div>

        <form className="request-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(610) 555-1234"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="eventType">What's the occasion? *</label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
              >
                <option value="">Choose one</option>
                <option value="birthday">Birthday</option>
                <option value="graduation">Graduation</option>
                <option value="holiday">Holiday</option>
                <option value="party">Party</option>
                <option value="business">Business / Event</option>
                <option value="other">Something else</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="eventDate">When do you need it? *</label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="size">Approximate Size</label>
              <input
                id="size"
                name="size"
                type="text"
                placeholder='Example: 3 ft × 5 ft'
                value={formData.size}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="designIdea">Tell me about your idea *</label>
            <textarea
              id="designIdea"
              name="designIdea"
              rows="5"
              placeholder="Colors, wording, theme, characters, inspiration... tell me everything!"
              value={formData.designIdea}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="budget">Approximate Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Select a range</option>
              <option value="under-50">Under $50</option>
              <option value="50-75">$50 – $75</option>
              <option value="75-100">$75 – $100</option>
              <option value="100-plus">$100+</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="notes">Anything else?</label>
            <textarea
              id="notes"
              name="notes"
              rows="3"
              placeholder="Any other details I should know?"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-button">
            Send My Request →
          </button>

          <p className="form-disclaimer">
            This is a request, not a confirmed order. I'll reach out after
            reviewing your idea.
          </p>

        </form>
      </div>
    </section>
  );
}

export default RequestForm;