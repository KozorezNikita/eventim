// PrivacyPolicy.jsx
import React from "react";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy">
      <h2 className="popular-title">
        <span className="dot"></span> DATENSCHUTZ
      </h2>

      <div className="policy-section">
        <h3>1. ALLGEMEINE INFORMATIONEN</h3>
        <p>
          Diese Datenschutzerklärung beschreibt, wie Eventim System GmbH, registriert in Berlin, 
          Friedrichstraße 7, Deutschland, Ihre personenbezogenen Daten erhebt, verwendet und schützt, 
          wenn Sie unsere Website und Dienstleistungen nutzen.
        </p>
        <p>
          Durch den Kauf von Tickets oder die Nutzung unserer Website erklären Sie sich mit dieser 
          Datenschutzerklärung einverstanden. Die Verarbeitung Ihrer Daten erfolgt gemäß der 
          Datenschutz-Grundverordnung (DSGVO) und den geltenden deutschen Datenschutzgesetzen.
        </p>
      </div>

      <div className="policy-section">
        <h3>2. VERANTWORTLICHER (DATA CONTROLLER)</h3>
        <p>Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten ist:</p>
        <p>
          Eventim System GmbH<br />
          Friedrichstraße 7, 10117 Berlin, Deutschland<br />
          Email: <a href="mailto:eventim@gmail.com">eventim@gmail.com</a>
        </p>
      </div>

      <div className="policy-section">
        <h3>3. WELCHE DATEN WIR ERHEBEN</h3>
        <p>Wir können folgende personenbezogene Daten erfassen, wenn Sie unsere Website nutzen oder Tickets kaufen:</p>
        <ul>
          <li>Vollständiger Name</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Rechnungs- oder Lieferadresse</li>
          <li>Zahlungsinformationen (sicher verarbeitet über externe Zahlungssysteme)</li>
          <li>IP-Adresse und technische Geräteinformationen</li>
        </ul>
      </div>

      <div className="policy-section">
        <h3>4. ZWECK DER DATENVERARBEITUNG</h3>
        <p>Ihre Daten werden verwendet, um:</p>
        <ul>
          <li>Ihren Ticketkauf zu bearbeiten und zu bestätigen</li>
          <li>E-Tickets und Bestellbestätigungen zu versenden</li>
          <li>Kundenservice bereitzustellen</li>
          <li>Sie über kommende Veranstaltungen zu informieren (nur mit Ihrer Einwilligung)</li>
          <li>Gesetzliche, steuerliche und buchhalterische Pflichten zu erfüllen</li>
        </ul>
      </div>

      <div className="policy-section">
        <h3>5. RECHTSGRUNDLAGE DER VERARBEITUNG</h3>
        <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von:</p>
        <ul>
          <li>Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung (Ticketkauf)</li>
          <li>Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (Marketing, Newsletter)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO – Berechtigtes Interesse (Betrugsprävention, Verbesserung des Services)</li>
        </ul>
      </div>

      <div className="policy-section">
        <h3>6. DATENSPEICHERUNG UND SICHERHEIT</h3>
        <p>
          Ihre personenbezogenen Daten werden sicher innerhalb der Europäischen Union gespeichert 
          und nur so lange aufbewahrt, wie es für die oben genannten Zwecke erforderlich ist — 
          in der Regel bis zu 3 Jahre nach Ihrem letzten Kauf, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
        <p>
          Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten vor 
          unbefugtem Zugriff, Verlust oder Missbrauch zu schützen.
        </p>
      </div>

      <div className="policy-section">
        <h3>7. DATENWEITERGABE</h3>
        <p>Ihre Daten werden nur weitergegeben an:</p>
        <ul>
          <li>Veranstalter (zur Zutrittskontrolle bei Events)</li>
          <li>Zahlungsdienstleister (zur sicheren Zahlungsabwicklung)</li>
          <li>Versandunternehmen (bei Versand von physischen Tickets)</li>
        </ul>
        <p>Wir verkaufen oder übermitteln Ihre Daten nicht an Dritte zu Werbezwecken.</p>
      </div>

      <div className="policy-section">
        <h3>8. IHRE RECHTE</h3>
        <p>Sie haben das Recht auf:</p>
        <ul>
          <li>Auskunft über gespeicherte Daten</li>
          <li>Berichtigung unrichtiger Daten</li>
          <li>Löschung („Recht auf Vergessenwerden“)</li>
          <li>Einschränkung der Verarbeitung</li>
          <li>Widerspruch gegen die Verarbeitung</li>
          <li>Datenübertragbarkeit</li>
        </ul>
        <p>Zur Ausübung Ihrer Rechte kontaktieren Sie uns unter: <a href="mailto:datenschutz@eventim-system.de">datenschutz@eventim-system.de</a></p>
      </div>

      <div className="policy-section">
        <h3>9. KONTAKT</h3>
        <p>
          Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Verarbeitung Ihrer personenbezogenen Daten haben, 
          kontaktieren Sie uns bitte unter: <a href="mailto:eventim@gmail.com">eventim@gmail.com</a>
        </p>
        <p>
          Eventim Sp. z o.o., Berlin, Friedrichstraße 7
        </p>
      </div>
    </section>
  );
}
