export const Contact = () => {
  return (
    <section className="bg-muted py-10 px-4 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-1 space-y-6">
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="text-lg text-muted-foreground">
            MediVision's AI-powered analysis provides additional insights to
            support medical professionals, automating the generation of
            diagnostic reports and enabling real-time feedback to patients. By
            leveraging cloud computing and encryption, we aim to reduce the
            burden on healthcare providers and improve patient care.
          </p>
        </div>
        <div className="order-2">
          <img
            src="/placeholder.svg"
            alt="Efficient Workflow"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};
