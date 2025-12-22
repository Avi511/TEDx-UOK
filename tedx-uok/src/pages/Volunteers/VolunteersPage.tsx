import React from 'react';

interface FormData {
  full_name: string;
  email: string;
  phone: string;
  university: string;
  faculty: string;
  year_of_study: string;
  preferred_role: string;
  availability: string;
  previous_experience: string;
  skills: string;
  motivation: string;
  cv_url: string;
}

interface FormErrors {
  [key: string]: string;
}

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = true,
}:  {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React. ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const getBorderColor = () => {
    if (error) return '#EB0028';
    if (isFocused || isHovered) return '#EB0028';
    return '#1F1F1F';
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-300"
        style={{ letterSpacing:  '0', textAlign: 'left' }}
      >
        {label} {required && <span className="text-[#EB0028]">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        placeholder={placeholder}
        style={{
          transition: 'border-color 0.3s ease',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: getBorderColor(),
          backgroundColor: '#0E0E0E',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          width: '100%',
          color: '#FFFFFF',
          outline: 'none',
          letterSpacing: '0',
        }}
        required={required}
      />
      {error && <p className="text-[#EB0028] text-sm mt-1" style={{ letterSpacing: '0', textAlign: 'left' }}>{error}</p>}
    </div>
  );
};

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required = true,
  rows = 4,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e:  React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?:  string;
  required?: boolean;
  rows?: number;
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React. useState(false);

  const getBorderColor = () => {
    if (error) return '#EB0028';
    if (isFocused || isHovered) return '#EB0028';
    return '#1F1F1F';
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-300"
        style={{ letterSpacing: '0', textAlign: 'left' }}
      >
        {label} {required && <span className="text-[#EB0028]">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        placeholder={placeholder}
        rows={rows}
        style={{
          transition: 'border-color 0.3s ease',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: getBorderColor(),
          backgroundColor: '#0E0E0E',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          width: '100%',
          color: '#FFFFFF',
          outline: 'none',
          resize: 'none',
          letterSpacing: '0',
        }}
        required={required}
      />
      {error && <p className="text-[#EB0028] text-sm mt-1" style={{ letterSpacing: '0', textAlign: 'left' }}>{error}</p>}
    </div>
  );
};

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = true,
}: {
  label: string;
  name: string;
  value: string;
  onChange:  (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  error?: string;
  required?: boolean;
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  const getBorderColor = () => {
    if (error) return '#EB0028';
    if (isFocused || isHovered) return '#EB0028';
    return '#1F1F1F';
  };

  return (
    <div className="space-y-2">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-gray-300"
        style={{ letterSpacing: '0', textAlign:  'left' }}
      >
        {label} {required && <span className="text-[#EB0028]">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transition:  'border-color 0.3s ease',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: getBorderColor(),
          backgroundColor: '#0E0E0E',
          borderRadius:  '0.5rem',
          padding: '0.75rem 1rem',
          width: '100%',
          color: '#FFFFFF',
          outline: 'none',
          letterSpacing: '0',
        }}
        required={required}
      >
        <option value="" style={{ backgroundColor: '#0E0E0E', color: '#FFFFFF' }}>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} style={{ backgroundColor: '#0E0E0E', color: '#FFFFFF' }}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-[#EB0028] text-sm mt-1" style={{ letterSpacing: '0', textAlign: 'left' }}>{error}</p>}
    </div>
  );
};

const VolunteersPage: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    full_name:  '',
    email: '',
    phone: '',
    university: '',
    faculty: '',
    year_of_study: '',
    preferred_role: '',
    availability: '',
    previous_experience:  '',
    skills: '',
    motivation: '',
    cv_url: '',
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [selectedFile, setSelectedFile] = React. useState<File | null>(null);

  React.useEffect(() => {
    document.body.style.backgroundColor = '#000000';
    document.body.style.margin = '0';
    document. body.style.padding = '0';
    document. documentElement.style.backgroundColor = '#000000';
    
    return () => {
      document.body.style.backgroundColor = '';
      document. documentElement.style.backgroundColor = '';
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target. files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = 5 * 1024 * 1024;
      
      if (file. size > maxSize) {
        setErrors((prev) => ({ ...prev, cv_file: 'File size must be less than 5MB' }));
        setSelectedFile(null);
        return;
      }
      
      setSelectedFile(file);
      setErrors((prev) => ({ ...prev, cv_file: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData. email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.faculty.trim()) newErrors.faculty = 'Faculty is required';
    if (!formData. year_of_study) newErrors.year_of_study = 'Year of study is required';
    if (!formData. preferred_role) newErrors.preferred_role = 'Preferred role is required';
    if (!formData.availability) newErrors.availability = 'Availability is required';
    if (! formData.motivation.trim()) newErrors.motivation = 'Motivation is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      console.log('Selected file:', selectedFile);
      
      setSubmitStatus('success');
      
      setTimeout(() => {
        setFormData({
          full_name:  '',
          email: '',
          phone: '',
          university: '',
          faculty: '',
          year_of_study: '',
          preferred_role: '',
          availability: '',
          previous_experience:  '',
          skills: '',
          motivation: '',
          cv_url: '',
        });
        setSelectedFile(null);
        setSubmitStatus('idle');
      }, 3000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const roleOptions = [
    'Logistics & Operations',
    'Marketing & Social Media',
    'Technical Support',
    'Registration & Guest Services',
    'Content Creation',
    'Photography & Videography',
  ];

  const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];

  const availabilityOptions = [
    'Weekdays only',
    'Weekends only',
    'Both weekdays and weekends',
    'Flexible',
  ];

  return (
    <>
      <style>{`
        body, html, #root {
          background-color: #000000 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        :: placeholder {
          color: #6B7280;
          opacity: 1;
        }
        * {
          letter-spacing: 0 !important;
        }
      `}</style>
      
      <div style={{ 
        backgroundColor: '#000000', 
        minHeight: '100vh', 
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom:  0
      }}>
        <div className="min-h-screen bg-black py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#FFFFFF', letterSpacing: '0' }}>
                Volunteer Application for <span style={{ color: '#EB0028' }}>TED<sup style={{ color: '#EB0028' }}>x</sup></span> <span style={{ color: '#FFFFFF' }}>UoK</span>
              </h1>
              <p className="text-gray-400 text-lg" style={{ letterSpacing: '0' }}>
                Join our team and help create an unforgettable experience
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-900/20 border border-green-500 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <div>
                    <h3 className="text-white font-bold" style={{ letterSpacing: '0' }}>Application Submitted Successfully!</h3>
                    <p className="text-gray-400 text-sm" style={{ letterSpacing: '0' }}>We'll review your application and get back to you soon.</p>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-900/20 border border-[#EB0028] rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-[#EB0028]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <div>
                    <h3 className="text-white font-bold" style={{ letterSpacing: '0' }}>Submission Failed</h3>
                    <p className="text-gray-400 text-sm" style={{ letterSpacing: '0' }}>Please check the form and try again.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-[#0A0A0A] border border-[#1F1F1F] rounded-xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center justify-center" style={{ color: '#FFFFFF', letterSpacing: '0' }}>
                  <span className="w-8 h-8 bg-[#EB0028] rounded-full flex items-center justify-center text-sm font-bold mr-3" style={{ color: '#FFFFFF' }}>
                    1
                  </span>
                  Personal Information
                </h2>
                <div className="space-y-4">
                  <FormInput
                    label="Full Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    error={errors.full_name}
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john. doe@example.com"
                    error={errors.email}
                  />
                  <FormInput
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    error={errors.phone}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center justify-center" style={{ color: '#FFFFFF', letterSpacing: '0' }}>
                  <span className="w-8 h-8 bg-[#EB0028] rounded-full flex items-center justify-center text-sm font-bold mr-3" style={{ color:  '#FFFFFF' }}>
                    2
                  </span>
                  Academic Information
                </h2>
                <div className="space-y-4">
                  <FormInput
                    label="University"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    placeholder="University of Kelaniya"
                    error={errors.university}
                  />
                  <FormInput
                    label="Faculty / Department"
                    name="faculty"
                    value={formData.faculty}
                    onChange={handleChange}
                    placeholder="Faculty of Computing and Technology"
                    error={errors. faculty}
                  />
                  <FormSelect
                    label="Year of Study"
                    name="year_of_study"
                    value={formData.year_of_study}
                    onChange={handleChange}
                    options={yearOptions}
                    error={errors.year_of_study}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center justify-center" style={{ color: '#FFFFFF', letterSpacing: '0' }}>
                  <span className="w-8 h-8 bg-[#EB0028] rounded-full flex items-center justify-center text-sm font-bold mr-3" style={{ color:  '#FFFFFF' }}>
                    3
                  </span>
                  Volunteer Details
                </h2>
                <div className="space-y-4">
                  <FormSelect
                    label="Preferred Role"
                    name="preferred_role"
                    value={formData.preferred_role}
                    onChange={handleChange}
                    options={roleOptions}
                    error={errors.preferred_role}
                  />
                  <FormSelect
                    label="Availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    options={availabilityOptions}
                    error={errors.availability}
                  />
                  <FormTextarea
                    label="Previous Experience"
                    name="previous_experience"
                    value={formData.previous_experience}
                    onChange={handleChange}
                    placeholder="Describe any relevant volunteer or event management experience..."
                    required={false}
                    rows={3}
                  />
                  <FormTextarea
                    label="Skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="List your relevant skills (e.g., communication, technical, creative)..."
                    required={false}
                    rows={3}
                  />
                  <FormTextarea
                    label="Why do you want to volunteer?"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us what motivates you to join TEDx UoK..."
                    error={errors.motivation}
                    rows={4}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center justify-center" style={{ color: '#FFFFFF', letterSpacing: '0' }}>
                  <span className="w-8 h-8 bg-[#EB0028] rounded-full flex items-center justify-center text-sm font-bold mr-3" style={{ color: '#FFFFFF' }}>
                    4
                  </span>
                  CV / Resume
                </h2>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300" style={{ letterSpacing: '0', textAlign: 'left' }}>
                      Upload CV <span className="text-gray-500">(Optional)</span>
                    </label>
                    
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,. docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="cv-upload"
                      />
                      <label
                        htmlFor="cv-upload"
                        className="block bg-[#0E0E0E] border-2 border-dashed border-[#1F1F1F] rounded-lg p-6 text-center hover:border-[#EB0028] transition-all cursor-pointer"
                        style={{ transition: 'all 0.3s ease' }}
                      >
                        <svg className="w-12 h-12 mx-auto mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                        {selectedFile ? (
                          <div>
                            <p className="text-white font-semibold mb-1" style={{ letterSpacing: '0' }}>{selectedFile.name}</p>
                            <p className="text-gray-500 text-xs" style={{ letterSpacing: '0' }}>
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-gray-400 text-sm mb-2" style={{ letterSpacing: '0' }}>
                              <span className="text-[#EB0028] font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-gray-500 text-xs" style={{ letterSpacing: '0' }}>PDF, DOC, DOCX (max.  5MB)</p>
                          </div>
                        )}
                      </label>
                    </div>

                    {errors.cv_file && <p className="text-[#EB0028] text-sm mt-1" style={{ letterSpacing: '0', textAlign: 'left' }}>{errors.cv_file}</p>}

                    <div className="flex items-center space-x-4 my-4">
                      <div className="flex-1 h-px bg-[#1F1F1F]"></div>
                      <span className="text-gray-500 text-sm" style={{ letterSpacing: '0' }}>or</span>
                      <div className="flex-1 h-px bg-[#1F1F1F]"></div>
                    </div>

                    <FormInput
                      label="CV URL"
                      name="cv_url"
                      type="url"
                      value={formData.cv_url}
                      onChange={handleChange}
                      placeholder="https://drive.google.com/your-cv"
                      error={errors.cv_url}
                      required={false}
                    />
                    
                    <p className="text-gray-500 text-xs flex items-start space-x-2" style={{ letterSpacing: '0', textAlign: 'left' }}>
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      <span>Share your CV via Google Drive or Dropbox for easy access</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#EB0028] py-4 rounded-lg font-bold text-lg hover:bg-[#c7001f] shadow-lg hover:shadow-xl"
                  style={{ color: '#FFFFFF', transition: 'all 0.3s ease', letterSpacing: '0' }}
                >
                  Submit Application
                </button>
                <p className="text-gray-500 text-sm text-center mt-4" style={{ letterSpacing: '0' }}>
                  By submitting, you agree to our terms and privacy policy
                </p>
              </div>
            </form>

            <div className="text-center mt-8 pb-8">
              <a
                href="/volunteer"
                style={{ 
                  color: '#EB0028', 
                  textDecoration: 'none', 
                  letterSpacing: '0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap:  '0.5rem'
                }}
                onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#EB0028' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
                <span>Back to Volunteer Information</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunteersPage;
