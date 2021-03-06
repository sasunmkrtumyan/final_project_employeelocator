import { useState, useEffect } from "react";
import { useAuth } from "../../helpers/hooks/useAuth";
import { useForm, Controller } from "react-hook-form";
import firebase from "firebase/app";
import SearchCategory from "../employeeSearchForms/searchField/SearchCategory";
import SearchExperience from "../employeeSearchForms/searchField/SearchExperience";
import SearchJobType from "../employeeSearchForms/searchField/SearchJobType";
import SearchRegion from "../employeeSearchForms/searchField/searchRegion";
import { Input } from "antd";
import UploadCV from "./UploadCV";
import UploadImage from "./UploadImage";
import { updateProfile } from "../../sevices/user.services";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MyAccount() {
  const { user } = useAuth();
  const [employeedata, setEmployeedata] = useState({});
  const notify = () => toast.success("Your post updated successfully!");

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: employeedata });

  useEffect(() => {
    if (user) {
      const { fetchedCVUrl, fetchedimgUrl, ...data } = user;
      setEmployeedata(data);
      const keys = Object.keys(data);
      const newObj = {};
      keys.forEach((key) => (newObj[key] = data[key]));
      reset(newObj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function onSubmit(values) {
    const uid = firebase.auth().currentUser.uid;
    updateProfile({ uid, ...values });
    notify();
  }

  return (
    <div className="container">
      <h2 className="heading-text large-font ">My account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="myAccount">
          <div className="myAccount-left">
            <div className="search-sec">
              <p className="post-text">Let's create a post</p>

              <div className="search-border">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input placeholder="name" {...field} value={field.value} />
                  )}
                />
                {errors.name && (
                  <span className="required">This field is required</span>
                )}
                <Controller
                  name="surname"
                  control={control}
                  defaultValue={employeedata.surname}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      className="surname"
                      placeholder="surname"
                      value={field.value}
                      {...field}
                    />
                  )}
                />
                {errors.surname && (
                  <span className="required">This field is required</span>
                )}
                <Controller
                  name="phone"
                  control={control}
                  defaultValue={employeedata.phone}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      className="surname"
                      placeholder="phone number"
                      value={field.value}
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <span className="required">This field is required</span>
                )}
              </div>
              <Controller
                name="profession"
                control={control}
                defaultValue={employeedata.profession}
                rules={{ required: true }}
                render={({ field }) => (
                  <SearchCategory
                    value={field.value}
                    changeHandler={field.onChange}
                  />
                )}
              />
              {errors.profession && (
                <span className="required">This field is required</span>
              )}

              <Controller
                name="region"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <SearchRegion
                    value={field.value}
                    changeHandler={field.onChange}
                  />
                )}
              />
              {errors.region && (
                <span className="required">This field is required</span>
              )}

              <Controller
                name="job_type"
                control={control}
                defaultValue={employeedata.job_type}
                rules={{ required: true }}
                render={({ field }) => (
                  <SearchJobType
                    value={field.value}
                    changeHandler={field.onChange}
                  />
                )}
              />
              {errors.job_type && (
                <span className="required">This field is required</span>
              )}
              <div className="search-border">
                <h2 className="heading-text">input min salary</h2>
                <Controller
                  value={employeedata?.minimum_wage}
                  name="minimum_wage"
                  control={control}
                  defaultValue={employeedata.minimum_wage}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      pattern="[0-9]*"
                      inputmode="numeric"
                      type="number"
                      className="input"
                      placeholder="Minimum-Wage"
                      value={field.value}
                      {...field}
                    />
                  )}
                />
                {errors.minimum_wage && (
                  <span className="required">This field is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="myAccount-right">
            <div className="search-sec">
              <Controller
                name="experience"
                control={control}
                defaultValue={employeedata.experience}
                rules={{ required: true }}
                render={({ field }) => (
                  <SearchExperience
                    value={field.value}
                    changeHandler={field.onChange}
                  />
                )}
              />
              {errors.experience && (
                <span className="required">This field is required</span>
              )}
              <div className="search-border">
                <h2 className="heading-text">Portfolio link</h2>
                <Controller
                  name="portfolio_link"
                  control={control}
                  defaultValue={employeedata.portfolio_link}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input placeholder="link" {...field} value={field.value} />
                  )}
                />
                {errors.portfolio_link && (
                  <span className="required">This field is required</span>
                )}
              </div>
              <Controller
                name="CVUrl"
                control={control}
                defaultValue={employeedata.CVUrl}
                rules={{ required: true }}
                render={({ field }) => (
                  <UploadCV value={field.value} onChange={field.onChange} />
                )}
              />
              {errors.CVUrl && (
                <span className="required">This field is required</span>
              )}

              <Controller
                name="imgUrl"
                control={control}
                defaultValue={employeedata.imgUrl}
                rules={{ required: true }}
                render={({ field }) => (
                  <UploadImage value={field.value} onChange={field.onChange} />
                )}
              />
              {errors.imgUrl && (
                <span className="required">This field is required</span>
              )}
            </div>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <input className="btn" type="submit" />
        </div>
      </form>
      <div></div>
    </div>
  );
}
