import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);
      // We try to call mockContactApi
      try {
        //utilisation de la fonction onSuccess car elle n'était pas utilisé, ainsi le formulaire est bien fonctionnel
        onSuccess(await mockContactApi());
      } catch (err) {
        onError(err);
        //le setSending passé en false est décalé après coup pour s'assurer que l'erreur soit bien attrappée
      } finally {
        setSending(false);
      }
    },
    /*  
        setSending(false);
        onSuccess(await mockContactApi());
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    */
    [onSuccess, onError]
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field name="Nom" placeholder="" label="Nom" />
          <Field name="Prenom" placeholder="" label="Prénom" />
          <Select
            name="Perso-ou-Entreprise"
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />
          <Field name="Email" placeholder="" label="Email" />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            name="Message"
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
};

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
};

export default Form;
